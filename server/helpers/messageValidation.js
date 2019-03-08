import Joi from 'joi';

// validating message function
const validation = {

  validateMessage(newEmail) {
    const messageSchema = {
      subject: Joi.string().min(3).required(),
      message: Joi.string().required(),
      senderId: Joi.number(),
      receiverId: Joi.number(),
      parentMessageId: Joi.number(),
      status: Joi.strict().required(),
    };

    return Joi.validate(newEmail, messageSchema);
  },
};

export default validation;
