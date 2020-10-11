// feature
class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

// tests
describe('Friends List', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('Initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('add a friends to the list', () => {
    friendsList.addFriend('Michel');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn(); // JEST Mock Function

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Michel');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Michel');
  });

  describe('removeFriend', () => {
    it('remove a frind from the list', () => {
      friendsList.addFriend('Michel');
      expect(friendsList.friends[0]).toEqual('Michel');
      friendsList.removeFriend('Michel');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as frinds does not exist', () => {
      expect(() => friendsList.removeFriend('Michel')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
