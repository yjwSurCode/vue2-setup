import { PERFORMANCE_API } from '../../core/api';
import { errRes, okRes, Res } from 'ts-depot';

class CompetitionCase {
  //玩家加入房间
  async join_room(query: {
    pageNum?: number | string | null;
    pageSize: number | string | null;
    //! Promise<any[]>    Promise<any>   返回值类型注意
  }): Promise<any> {
    const { code, body, msg } = await PERFORMANCE_API.request('/match/enroll/getList', {
      method: 'get',
      payload: {
        pageNum: 1,
        pageSize: 10
      },
      dataHandler: async (res: any, executor: any) => {
        const _data = await executor(res, 'json');

        const data: any = {
          code: _data.errorCode,
          body: _data.data,
          msg: _data.message
        };

        return data;
      }
    });

    return { code, body, msg };
  }

  //登录
  // Res<string, string>
  async login_svc(query: { username: string; password: string }): Promise<{ code: string; body: any; msg: any }> {
    const staffs = 123;
    const { code, body, msg } = await PERFORMANCE_API.request('/login', {
      method: 'post',
      payload: query,
      dataHandler: async (res: any, executor: any) => {
        const _data = await executor(res, 'json');

        const data: any = {
          code: _data.code,
          body: _data,
          msg: _data.message
        };

        return data;
      }
    });

    return { code, body, msg };
    // return body.code == '200' ? okRes(body.msg || '操作成功') : errRes(body.msg || '操作失败');
    // console.log('enroll', code);
    // return { code };
  }

  async enroll(query: any): Promise<Res<string, string>> {
    const staffs = 123;
    const body = await PERFORMANCE_API.request('/match/enroll', {
      method: 'post',
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      payload: query,
      dataHandler: async (res: any, executor: any) => {
        const _data = await executor(res, 'json');

        const data: any = {
          code: _data.code,
          body: _data.data,
          msg: _data.message
        };

        return data;
      }
    });

    return body.code == '200' ? okRes(body.msg || '操作成功') : errRes(body.msg || '操作失败');
    // console.log('enroll', code);
    // return { code };
  }

  async file_upload(query: {
    files: any;
    //! Promise<any[]>    Promise<any>   返回值类型注意
  }): Promise<any> {
    console.log(query.files[0], 'query.files');
    const formdata = new FormData();
    formdata.append('files', query.files[0].raw);
    // console.log('formdata', formdata.get('files').);
    // formdata.append('files', query.files);
    const { code, body, msg } = await PERFORMANCE_API.request('/match/enroll/uploads', {
      method: 'post',
      payload: formdata,
      payloadType: 'multipart',
      dataHandler: async (res: any, executor: any) => {
        const _data = await executor(res, 'json');

        const data: any = {
          code: _data.code,
          body: _data.data,
          msg: _data.message
        };

        return data;
      }
    });

    return { code, body, msg };
  }

  async setStaffScore(query: { staffs: string }): Promise<Res<string, string>> {
    const staffs = 123;
    const { body } = await PERFORMANCE_API.request('/rest/performanceScore/setScoreByEmpId', {
      method: 'post',
      payload: { userList: staffs }
    });

    return body.result ? okRes(body.msg || '操作成功') : errRes(body.msg || '操作失败');
  }
}

export const CompetitionCaseApi = new CompetitionCase();
