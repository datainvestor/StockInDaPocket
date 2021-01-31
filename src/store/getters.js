export default {
    //get main company name
    mainJson: state => {
      return state.bigjsondata
    },
    earnings: state => {
      return state.bigjsondata.Earnings
    },
    finviz: state => {
      return state.bigjsondata.Finviz
    },
    marketbeat: state => {
      return state.bigjsondata.Marketbeat
    },
    tipranks: state => {
      return state.tipranks.Tipranks
    },
    currentStock: state => {
      return state.currentStock
    }
}
