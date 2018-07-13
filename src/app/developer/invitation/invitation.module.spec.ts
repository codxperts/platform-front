import { InvitationModule } from './invitation.module';

describe('InvitationModule', () => {
  let invitationModule: InvitationModule;

  beforeEach(() => {
    invitationModule = new InvitationModule();
  });

  it('should create an instance', () => {
    expect(invitationModule).toBeTruthy();
  });
});
