import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordService {
  constructor(private httpService: HttpService) {}

  async getServices(query: string) {
    const { YCLIENTS_COMPANY_ID } = process.env;
    const URL = `services/${YCLIENTS_COMPANY_ID}`;

    try {
      // Получение всех услуг
      const response = await this.httpService.axiosRef
        .get(URL)
        .then((res) => res.data);

      // Фильтрация услуг по ключовому слову
      const filteredArray = response.data.filter((data) => {
        const lowerCaseKeyWord = query.toLowerCase();
        const validate =
          data.title.toLowerCase().search(lowerCaseKeyWord) >= 0 ||
          data.booking_title.toLowerCase().search(lowerCaseKeyWord) >= 0;

        if (validate) {
          return data;
        }
      });

      return filteredArray;
    } catch (error) {
      const errResponse = error.response;
      throw {
        ...errResponse.data,
        status: errResponse?.status,
        statusText: errResponse?.statusText,
      };
    }
  }
}
