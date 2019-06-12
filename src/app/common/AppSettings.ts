
export class AppSettings {

  // #region API End Points

  // API Key
  public static API_KEY = 'UAVb9m4QxT3cRkkNXzWjF4QvwpP553vK9sryNSVR';
  public static USER_NAME = 'benoit.foucque@lizeo-group.com';
  public static APPLICATION_ID = '5250001';
  public static CUSTOMER_PROFILE_ID = '9750001';
  public static COUNTRY_CODE = 'US';

  // API Endpoint
  public static WEB_ENDPOINT = 'http://localhost:4200';
  public static FRONTEND_WEB_ENDPOINT = 'http://localhost:4300';

  // API Constants - Name should start with 'API'
  public static API_ENDPOINT = 'https://amiqd9edf5.execute-api.us-east-1.amazonaws.com/production';

  // Competitor Setting
  public static API_GET_COMPETITOR_MATRIX = 'matrix/get_matrix';
  public static API_GET_COMPETITOR_MATRIX_SIMPLE = 'matrix/get_matrix_simple';
  public static API_GET_COMPETITOR_INDEX = 'index/get_index';

  // Website Setting
  public static API_GET_WEBSITE_LIST = 'web_site/get_website';
  public static API_GET_WEBSITE_GROUP = 'web_site/get_site_group_name';
  public static API_UPDATE_WEBSITE_GROUP = 'web_site/update_site_group_name';
}
