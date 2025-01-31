# Mern-Template-

PORT= 8000

DATABASE='mongodb+srv://dishadas4161:dishadas4161@cluster0.kagud.mongodb.net/E-commerceAPI?retryWrites=true&w=majority'

plugins: [react()],
  server:{
    proxy:{
      '/api/':{
        target:"http://localhost:8000"
      }
    }
  }


  app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})
