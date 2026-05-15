import {FC, memo, useCallback, useMemo, useState} from 'react';

// Replace with your Formspree form ID from https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_ID = 'mnjwejvp';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: FC = memo(() => {
  const defaultData = useMemo<FormData>(
    () => ({name: '', email: '', message: ''}),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<Status>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prev => ({...prev, [name]: value}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus('submitting');

      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus('success');
          setData(defaultData);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  if (status === 'success') {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-y-3 text-center">
        <p className="text-lg font-semibold text-white">Message sent!</p>
        <p className="text-sm text-neutral-400">Thanks for reaching out. I'll get back to you soon.</p>
        <button
          className="mt-2 rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          onClick={() => setStatus('idle')}
          type="button">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
      )}
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50"
        disabled={status === 'submitting'}
        type="submit">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
