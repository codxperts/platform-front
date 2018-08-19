import { InvitationsModule } from './invitations.module';

describe('InvitationsModule', () => {
  let invitationsModule: InvitationsModule;

  beforeEach(() => {
    invitationsModule = new InvitationsModule();
  });

  it('should create an instance', () => {
    expect(invitationsModule).toBeTruthy();
  });
});
