import {Router} from "express"
const router = Router()

router.get('/', (req, res)=> res.render('index', {title: 'Este es el index'}))
router.get('/about', (req, res)=> res.render('about', {title: 'pagina About  me'}))
router.get('/contact', (req, res)=> res.render('contact', {title: 'pagina Contact  me'}))
router.get('/experience', (req, res)=> res.render('experience', {title: 'pagina experience'}))
router.get('/projects', (req, res)=> res.render('projects', {title: 'pagina projects'}))

export default router