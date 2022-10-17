# Http Nodejs Chat

## Installation

```bash
# Change directory on the HNC folder

# Install node modules
npm update
```

If yo want to test, open terminal.

In the fisrt one :
```bash
# For listen
npm run rx
```

In the second one :
```bash
# For listen
npm run tx
```

Write something on the first one and your message should appear on the second one.

## Usage

Helper : use "_help_", "_h_" or nothing after ```node index.js```

Receive on listening port __PORT__
```bash
node index.js mode=rx port=PORT
```

Send to host __IP__ at port __PORT__
```bash
node index.js mode=tx host=IP port=PORT
```

## To improve it

- can register each message
- can create un rx/tx profil