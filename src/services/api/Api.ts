import FilesApi from './FilesApi/FilesApi'

class Api {
  public image: FilesApi

  constructor(baseUrl = '') {
    this.image = new FilesApi(baseUrl)
  }
}

export default Api