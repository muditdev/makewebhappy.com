import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'react-feather';
import { useRouter, NextRouter } from 'next/router';
import Button from 'components/Button';

import { Wrapper, Header, Title, Input, Description, InputWrapper } from './subscribe.styled';

type SubscribeProps = { title?: string; header?: boolean; className?: string };

const Newsletter = ({ title, header = true, className }: SubscribeProps) => {
  const { query } = useRouter() as NextRouter;
  const inputEl = useRef(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessage('Thank you for subscription! Check your inbox.');
    }, 1000);
  };

  if (query.confirmed) {
    return (
      <Wrapper className={className}>
        <Header>
          <CheckCircle style={{ color: 'green' }} />
          <Title>Thanks for confirming your email!</Title>
        </Header>
        <Description style={{ marginBottom: 0 }}>You&apos;re on the list and will get updates when new content is published.</Description>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <form onSubmit={subscribe}>
        {header && (
          <>
            <Header>
              <Send />
              <Title>{title || 'Enjoyed this post? Subscribe to the newsletter!'}</Title>
            </Header>
            <Description>
              A newsletter in the realm between <em className="em">design &amp; development</em>. Learn animations, CSS, web development
              tips &amp; tricks and creating delightful and useful interfaces!
            </Description>
            <Description>No spam, unsubcribe at any time!</Description>
          </>
        )}
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <InputWrapper className={message ? 'hidden' : ''}>
          <Input id="email-input" name="email" placeholder="Email address" ref={inputEl} required type="email" />
          <Button disabled={loading} type="submit">
            Subscribe
          </Button>
          {message && <Title>{message}</Title>}
        </InputWrapper>
      </form>
    </Wrapper>
  );
};

export default Newsletter;
