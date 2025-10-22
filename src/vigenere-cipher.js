const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
      this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i += 1) {
      const msgChar = message[i];
      const keyChar = key[keyIndex % key.length];
      if (alphabet.indexOf(msgChar) === -1) {
        result += msgChar;
      } else {
        const msgIndex = alphabet.indexOf(msgChar);
        const keyIndexChar = alphabet.indexOf(keyChar);
        const encryptedIndex = (msgIndex + keyIndexChar) % 26;
        result += alphabet[encryptedIndex];
        keyIndex += 1;
      }
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i += 1) {
      const msgChar = message[i];
      const keyChar = key[keyIndex % key.length];
      if (alphabet.indexOf(msgChar) === -1) {
        result += msgChar;
      } else {
        const msgIndex = alphabet.indexOf(msgChar);
        const keyIndexChar = alphabet.indexOf(keyChar);
        const decryptedIndex = (msgIndex - keyIndexChar + 26) % 26;
        result += alphabet[decryptedIndex];
        keyIndex += 1;
      }
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
