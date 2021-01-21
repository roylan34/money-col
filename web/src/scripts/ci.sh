source .bashrc
echo $FIREBASE_CONFIG | base64 --decode > .env
echo $STRIPE_KEY | base64 --decode >> .env
echo $STRIPE_SECRET_KEY | base64 --decode >> .env
echo $WPAPI_CONFIG | base64 --decode >> .env
echo $PAYPAL_KEY | base64 --decode >> .env
echo >> .env
echo REACT_APP_FIREBASE_EMULATOR=true >> .env
