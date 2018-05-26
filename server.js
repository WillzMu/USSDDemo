
const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  var personalDetails = ["wilfred"]
  res.send(personalDetails)
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text, fullname} = req.body
  var personalDetails = ["wilfred"]
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Welcome to Service Online
    1. Find a job
    2. Hire Someone
    3. Create profile`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Find a job
    1. Change status to available`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `CON Categories
    1. House Cleaner
    2. Yard Cleaner
    3. Carpenter
    4. More
    5. Back`
    res.send(response)
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    let response = `END we will contact you once a suitable employee has been found`
    res.send(response)
  } else if (text == '2*1') {
    // This is a second level response where the user selected 1 in the first instance
    let response = `CON List of available House Cleaners
    1. Mr. Mwenda K30/day
    2. Mr. Sakala K35/day
    3. Mr. Banda K32/day`
    // This is a terminal request. Note how we start the response with END
    res.send(response)
  } else if(text == '3'){
    let response = `CON Personal Information
    1. Full Name`
    let fullname = response
    res.send(response)
    
  }else if(text == fullname){
    console.log(fullname)
  }else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

