import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: var(--сolor-section-odd-background);
  padding: 30px 0;
`;

// export function Section() {
//  styled.section`
//     background-color: var(--сolor-section-odd-background);
//   padding: 30px 0;`
// }
export const Profile = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--color-border);
  box-shadow: 1px 1px 10px var(--color-border);
  border-radius: 3px;
  background-color: #fff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.img`
  max-width: 100px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin: 20px auto 0;
`;
export const UserName = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
  color: var(--color-primary-text);
`;
export const Tag = styled.p`
  color: var(--color-secondary-text);
  text-align: center;
  margin-bottom: 0;
`;

export const Location = styled.p`
  color: var(--color-secondary-text);
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;

  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  border-top: 1px solid var(--color-border);
  background-color: #eef0f2;
  li {
    display: flex;
    flex-direction: column;

    padding: 20px;
    width: calc(100% / 3);
    box-shadow: 1px 1px 5px var(--color-border);
  }

  li::nth-of-type(2) {
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    box-shadow: 1px 1px 5px var(--color-border);
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: calc(100% / 3);
  box-shadow: 1px 1px 5px var(--color-border);

  &:nth-of-type(2) {
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    box-shadow: 1px 1px 5px var(--color-border);
  }
`;

export const Label = styled.span`
  color: var(--color-secondary-text);
  line-height: 1.5;
`;

export const Quantity = styled.span`
  color: var(--color-primary-text);
  font-weight: bold;
`;
