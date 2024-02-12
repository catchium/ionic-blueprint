import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPrivacyPage } from './contact-privacy.page';

describe('ContactPrivacyPage', () => {
  let component: ContactPrivacyPage;
  let fixture: ComponentFixture<ContactPrivacyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
