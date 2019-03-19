import Joi from 'joi';

// validating message function
const validation = {

  validateMessage(value) {
    const messageSchema = {
      subject: Joi.string().min(3).required(),
      message: Joi.string().required(),
      senderId: Joi.number(),
      receiverId: Joi.number(),
      parentMessageId: Joi.number(),
      status: Joi.strict().required(),
    };

    return Joi.validate(value, messageSchema);
  },
};

export default validation;
