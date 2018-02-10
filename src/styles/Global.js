import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  horizontalCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  redBtn: {
    backgroundColor: 'red',
  },

  boldBtnContent: {
    fontWeight: 'bold',
  },

  bigBottomBtn: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  homeImg: {
    flex: 0.8,
    width: undefined,
    height: undefined,
  },

  homeBtn: {
    flex: 0.2,
  },

  text: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30,
  },

  finishContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  finishText: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 20,
  },

  finishStrong: {
    textAlign: 'center',
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
  },

  error: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 10,
  },

  field: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 0,
  },

  input: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
  },

  roundCounterWrapper: {
    flex: 0.05,
    width: '100%',
    padding: 10,
    backgroundColor: 'red',
  },

  roundCounter: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  jokeTextWrapper: {
    flex: 0.65,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  jokeText: {
    fontSize: 32,
  },

  nextJokeBtn: {
    backgroundColor: 'red',
    marginTop: 20,
    marginBottom: 20,
  },

  newGameBtn: {
    backgroundColor: 'red',
    margin: 20,
  },

  teamBadges: {
    flex: 0.3,
    flexDirection: 'row',
    borderColor: 'gray',
    borderTopWidth: 0.5,
  },

  teamBadgeInner: {
    padding: 10,
  },

  teamBadgeInnerActive: {
    backgroundColor: 'rgba(255, 190, 118, 1.0)',
  },

  teamBadgeInnerInactive: {},

  teamScore: {
    marginTop: 2.5,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
