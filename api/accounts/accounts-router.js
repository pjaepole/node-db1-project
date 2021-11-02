const Accounts = require('./accounts-model')
const router = require('express').Router()
const md = require('./accounts-middleware')
router.get('/', async (req, res, next) => {
  
  try{
    const accounts = await Accounts.getAll();
    res.json(accounts)
  } catch (err){

  }
})

router.get('/:id',md.checkAccountId, async (req, res, next) => {
  res.json(req.account)
})

router.post('/', async (req, res, next) => {
  try{
    const newAccount = await Accounts.create(req.body)
  } catch(err){

  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
