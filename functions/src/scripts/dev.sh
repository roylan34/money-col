source .bashrc
echo $FIREBASE_CONFIG | base64 --decode > .env
echo $STRIPE_KEYS | base64 --decode >> .env
