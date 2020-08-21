
// const BASEURL = 'http://brandnewkey.sohosted-vps.nl:5380'
 const BASEURL = 'https://qflvs.cf-kunststoffen.nl';
export default {
    // GetToken: "http://brandnewkey.sohosted-vps.nl:5380/token",
    GetToken: "https://qflvs.cf-kunststoffen.nl/token",
    ChangePassword:  `${BASEURL}/api/Account/ChangePassword`,
    GetUserData:  `${BASEURL}/api/users/GetUsers?excludeActiveUsers=false`,
    GetUserDataById: `${BASEURL}/api/Users/`,
    PostUserData: `${BASEURL}/api/Users`,
    PostUserUpdate: `${BASEURL}/api/users/Update`,
    DeleteUserData: `${BASEURL}/api/users/Delete?id=`,
    GetTasksData: `${BASEURL}/api/factory/execute/portallvs/getTasks`,
    GetTaskType:  `${BASEURL}/api/factory/execute/portallvs/getTasktypesDropdown`,
    GetCustomer:  `${BASEURL}/api/factory/execute/portallvs/getCustomersDropdown`,
    GetEmployee:  `${BASEURL}/api/factory/execute/portallvs/getEmployeeDropdown`,
    PostTask:     `${BASEURL}/api/factory/execute/portallvs/postTask`,
    GetCustomerData:     `${BASEURL}/api/factory/execute/portallvs/getCustomers`,
    GetCustomerDetailData: `${BASEURL}/api/factory/execute/portallvs/getCustomerDetails`,
    GetCustomerFinancialDetailData: `${BASEURL}/api/factory/execute/portallvs/getCustomerFinancialDetails`,
    GetCustomerContacts: `${BASEURL}/api/factory/execute/portallvs/getCustomerContacts`,
    GetCustomerModels: `${BASEURL}/api/factory/execute/portallvs/getCustomerModels`,
    GetCustomerProducts: `${BASEURL}/api/factory/execute/portallvs/getCustomerProducts`,
    GetCustomerOrders: `${BASEURL}/api/factory/execute/portallvs/getCustomerOrders`,
    GetCustomerOrderDetails: `${BASEURL}/api/factory/execute/portallvs/getCustomerOrderDetails`,
    GetCustomerCompetitors: `${BASEURL}/api/factory/execute/portallvs/getCompetitorModels`,
    GetCustomerPricing: `${BASEURL}/api/factory/execute/portallvs/getCustomerPricing`,
    GetCustomerQuotes: `${BASEURL}/api/factory/execute/portallvs/getCustomerQuotes`,
    GetCustomerQuoteDetails: `${BASEURL}/api/factory/execute/portallvs/getCustomerQuoteDetails`,
    GetCustomerMolds: `${BASEURL}/api/factory/execute/portallvs/getCustomerMolds`,
    GetVisitReports: `${BASEURL}/api/factory/execute/portallvs/getVisitReports`,
    GetCustomerDropdown: `${BASEURL}/api/factory/execute/portallvs/getCustomersDropdown`,
    CreateVisitereportHeader: `${BASEURL}/api/factory/execute/portallvs/createVisitreportHeader`,
    GetVisitFirstQuesion: `${BASEURL}/api/factory/execute/portallvs/getFirstQuestion`,
    GetSelectAnswer: `${BASEURL}/api/factory/execute/portallvs/getPossibleAnswers`,
    PostVisitReportAnswer: `${BASEURL}/api/factory/execute/portallvs/postVisitReportAnswer`,
    GetNextQuestion: `${BASEURL}/api/factory/execute/portallvs/getNextQuestion`,
    AddRemarkTovisitReport: `${BASEURL}/api/factory/execute/portallvs/addRemarkToVisitReport`,
    GetNumberOpenTasks: `${BASEURL}/api/factory/execute/portallvs/getNumberOpenTasks`,
    GetCustomerCoordinates: `${BASEURL}/api/factory/execute/portallvs/getCustomerCoordinates`,
    PostCustomer: `${BASEURL}/api/factory/execute/portallvs/postCustomer`,
    GetCustomerById: `${BASEURL}/api/factory/execute/portallvs/getCustomer`,
    PostContact: `${BASEURL}/api/factory/execute/portallvs/postContact`,
    PutContact: `${BASEURL}/api/factory/execute/portallvs/putContact`,
    PutCustomer: `${BASEURL}/api/factory/execute/portallvs/putCustomer`,
    GetContact: `${BASEURL}/api/factory/execute/portallvs/getContact`,
    GetTask: `${BASEURL}/api/factory/execute/portallvs/getTask`, 
    PutTask: `${BASEURL}/api/factory/execute/portallvs/putTask`,    
    GetRemark: `${BASEURL}/api/factory/execute/portallvs/getRemark`,  
    GetRoles: `${BASEURL}/api/Roles`,  
    GetTaskHistory: `${BASEURL}/api/factory/execute/portallvs/getTaskHistory`,  
    GetTopCustomer: `${BASEURL}/api/factory/execute/portallvs/getTop10Customers`,  
    GetTopItems: `${BASEURL}/api/factory/execute/portallvs/getTop10Items`,
    GetTopModel: `${BASEURL}/api/factory/execute/portallvs/getTop10Models`,
    GetVisitReportHeader: `${BASEURL}/api/factory/execute/portallvs/getVisitReportHeader`,
    GetVisitReportLines: `${BASEURL}/api/factory/execute/portallvs/getVisitReportLines`,
    GetCustomerCoordinatesById: `${BASEURL}/api/factory/execute/portallvs/getCustomerCoordinatesById`,
    PostEmail: `${BASEURL}/api/email`,
    PostFileUpload: `${BASEURL}/api/factory/upload-file`,
    PostTaskDocuments: `${BASEURL}/api/factory/execute/portallvs/postTaskDocuments`,
    GetTaskDocuments: `${BASEURL}/api/factory/execute/portallvs/getTaskDocuments`,
    DownLoadTaskFile: `${BASEURL}/api/factory/download-file/`,
    PostVisitreportDocuments: `${BASEURL}/api/factory/execute/portallvs/postVisitreportDocuments`,
    GetVisitreportDocuments: `${BASEURL}/api/factory/execute/portallvs/getVisitreportDocuments`,
    PostCustomerDocuments: `${BASEURL}/api/factory/execute/portallvs/postCustomerDocuments`,
    GetCustomerDocuments: `${BASEURL}/api/factory/execute/portallvs/getCustomerDocuments`,
    GetImage: `${BASEURL}/api/Images?path=`,
    GetNewestCustomer: `${BASEURL}/api/factory/execute/portallvs/getNewestCustomer`,
    PostTaskComments: `${BASEURL}/api/factory/execute/portallvs/postTaskComments`,
    GetTaskComments: `${BASEURL}/api/factory/execute/portallvs/getTaskComments`,
    GetTaskStatusses: `${BASEURL}/api/factory/execute/portallvs/getTaskStatusses`,
    GetCustomerRecords: `${BASEURL}/api/factory/execute/portallvs/getCustomerRecords`,
    GetAllCustomers: `${BASEURL}/api/factory/execute/portallvs/getAllCustomers`,
    DeleteTask: `${BASEURL}/api/factory/execute/portallvs/deleteTask`,
    GetProductImage: `${BASEURL}/api/factory/execute/portallvs/getProductImage`,
    GetNewItems:`${BASEURL}/api/factory/execute/portallvs/getNwNewProducts`,
    GetNewItemsCustomer: `${BASEURL}/api/factory/execute/portallvs/getNwCustomersDropdown`,
    PostNewItem: `${BASEURL}/api/factory/execute/portallvs/postNwNewProduct`,
    GetItemDetail: `${BASEURL}/api/factory/execute/portallvs/getNwNewProductDetail`,
    GetNewItemContact: `${BASEURL}/api/factory/execute/portallvs/getNwContactsDropdown`,
    GetRawMaterials: `${BASEURL}/api/factory/execute/portallvs/getNwRawMaterial`,
    PostNewRawMaterial: `${BASEURL}/api/factory/execute/portallvs/postNwRawMaterial`,
    GetNewMaterialTypes: `${BASEURL}/api/factory/execute/portallvs/getNwRawMaterialTypeDropdown`,
    GetNewMaterialValues: `${BASEURL}/api/factory/execute/portallvs/getNwRawMaterialDropdown`,
    GetApplication: `${BASEURL}/api/factory/execute/portallvs/getApplication`,
    PutApplication: `${BASEURL}/api/factory/execute/portallvs/putApplication`,
    GetProduction: `${BASEURL}/api/factory/execute/portallvs/getProduction`,
    PutProduction: `${BASEURL}/api/factory/execute/portallvs/putProduction`,
    GetNwPeriphery: `${BASEURL}/api/factory/execute/portallvs/getNwPeriphery`,
    GetNwPeriferieTypesDropdown: `${BASEURL}/api/factory/execute/portallvs/getNwPeriferieTypesDropdown`,
    postNwPeriphery: `${BASEURL}/api/factory/execute/portallvs/postNwPeriphery`,
  };