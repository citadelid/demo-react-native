import { atom, useRecoilState } from 'recoil';

const widgetState = atom<boolean>({
  key: 'widgetState',
  default: false,
});

export const useWidget = () => {
  return useRecoilState(widgetState);
};

type ProductSettings = {
  mappingId: string;
  providerId: string;
  depositValue: number;
  routingNumber: string;
  accountNumber: string;
  bankName: string;
  accountType: string;
};

const productSettingsState = atom<ProductSettings>({
  key: 'employment',
  default: {
    mappingId: '',
    providerId: '',
    depositValue: 1,
    routingNumber: '123456789',
    accountNumber: '160025987',
    bankName: 'TD Bank',
    accountType: 'checking',
  },
});

export const useProductSettings = () => {
  return useRecoilState(productSettingsState);
};
