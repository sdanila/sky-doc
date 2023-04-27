import { BaseHttpService } from '../BaseHttpService'
import { QueryTypes } from '../data'

class FilesApi extends BaseHttpService {

  constructor(baseUrl: string) {
    super(baseUrl)
    this.baseUrl = `${baseUrl}/files`
  }

  async getFiles() {
    return this.sendQuery({
      url: `${this.baseUrl}`,
      type: QueryTypes.GET,
    })
  }

  async addFile() {
    return this.sendQuery({
      url: `${this.baseUrl}/add`,
      type: QueryTypes.POST,
    })
  }

  async changeFile({ id }: { id: string }) {
    return this.sendQuery({
      url: `${this.baseUrl}/change/${id}`,
      type: QueryTypes.PUT,
    })
  }

  async deleteFile({ id }: { id: string }) {
    return this.sendQuery({
      url: `${this.baseUrl}/delete/${id}`,
      type: QueryTypes.DELETE,
    })
  }
}

export default FilesApi