import e from "express";
import { getUser, search, userLogin } from "./controller.js";
const router = e.Router();

router.get('/about', (req, res) => {
    res.send('About page');
});
// localhost:3000/user/1/name/John
router.get('/user/:id/name/:name', getUser);
// localhost:3000/search?name=John&age=25
router.get('/search', search);

router.post('/userLogin', userLogin);

export default router;

// GET to fetch data
// POST to send data needs miggleware (express.json())
// PUT to update data
// DELETE to delete data