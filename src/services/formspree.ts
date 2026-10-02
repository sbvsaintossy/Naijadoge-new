export interface FormspreePayload {
  name: string;
  email: string;
  phone: string;
  platform: string;
  role?: string;
  inquiryType?: string;
  country?: string;
  message: string;
  [key: string]: any;
}

export interface FormSubmissionResult {
  ok: boolean;
  message: string;
  error?: string;
}

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaenzkng';

export async function submitToFormspree(data: FormspreePayload): Promise<FormSubmissionResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `New NaijaDoge Lead: ${data.name} (${data.platform || 'General'} - ${data.role || data.inquiryType || 'Inquiry'})`,
        _source: 'NaijaDoge Website',
        submittedAt: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      return {
        ok: true,
        message: 'Your application has been received by Naijadoge Executive Desk. Our talent team will reach out via WhatsApp & Email shortly.',
      };
    } else {
      const errData = await response.json().catch(() => ({}));
      return {
        ok: false,
        message: 'Unable to deliver message at this time.',
        error: errData?.error || 'Server rejected submission. Please connect directly via WhatsApp.',
      };
    }
  } catch (err: any) {
    return {
      ok: false,
      message: 'Network connection issue.',
      error: err?.message || 'Connection lost. Please contact our VIP Desk directly via WhatsApp.',
    };
  }
}
