//discussions 라우터
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// 1. TODO: 모든 discussions 목록을 조회하는 라우터
router.get('/', findAll);

// 2. TODO: :id에 맞는 discussion을 조회하는 라우터
router.get('/:id', findById);

module.exports = router;