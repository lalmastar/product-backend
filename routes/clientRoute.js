import express from 'express';
import { createClient, deleteClient, getallClients } from '../controllers/clientController.js';
const router = new express.Router();


router.post('/form', createClient);
router.get('/all-clients', getallClients);
router.delete('/delete-client/:id', deleteClient);

export default router;