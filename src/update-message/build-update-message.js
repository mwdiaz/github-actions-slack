const buildUpdateMessage = (channelId = "", text = "", ts = "", optional = {}) => {
  const message = {
    channel: channelId,
    text: text,
    ts: ts,
  };

  Object.keys(optional).forEach((name) => {
    message[name] = optional[name];
  });

  return message;
};

module.exports = buildUpdateMessage;
