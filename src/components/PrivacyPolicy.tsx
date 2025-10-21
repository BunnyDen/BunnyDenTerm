import {Link} from 'react-router-dom';
import '../App.css';

function PrivacyPolicy() {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>개인정보 처리방침</h1>
        <p className="terms-date">시행일자: 2025년 10월 21일</p>
      </header>

      <main className="terms-content">
        <section className="terms-chapter">
          <h2>1. 수집하는 정보 및 이용 목적</h2>

          <article className="terms-article">
            <h3>수집 항목</h3>
            <ol className="terms-list">
              <li>사용자 식별을 위한 userId</li>
              <li>게임 내 플레이 기록(점수, 진행 단계, 승패, 랭킹 등)</li>
            </ol>
            <p>본 게임은 정확한 위치정보(GPS)를 수집하지 않습니다.</p>
          </article>

          <article className="terms-article">
            <h3>이용 목적</h3>
            <ol className="terms-list">
              <li>게임 데이터 저장 및 복원(예: 점수, 기록 유지)</li>
              <li>버그 수정 및 서비스 품질 향상</li>
              <li>공지사항 및 중요 알림 제공</li>
              <li>비식별 통계 분석을 통한 서비스 개선</li>
            </ol>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>2. 제3자 제공 및 외부 전송</h2>
          <article className="terms-article">
            <p>
              서비스 제공자는 사용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우 예외적으로
              제공될 수 있습니다.
            </p>
            <ol className="terms-list">
              <li>법률에 따라 요구되는 경우(예: 수사기관의 요청)</li>
              <li>
                서비스 안정성 확보 및 장애 대응을 위한 기술적 지원 시(신뢰할 수 있는 업체에 위탁하며 본 방침 준수 의무
                부과)
              </li>
              <li>광고 수익을 위한 익명화된 데이터(개인 식별 불가) 제공</li>
            </ol>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>3. 정보 수집 중단(옵트아웃)</h2>
          <article className="terms-article">
            <p>
              이용자는 언제든지 게임을 삭제함으로써 정보 수집을 중단할 수 있습니다. 삭제 방법은 모바일 기기 또는 앱
              마켓의 일반적인 제거 절차를 따릅니다.
            </p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>4. 보관 및 파기</h2>
          <article className="terms-article">
            <p>
              서비스 제공자는 이용자의 게임 기록(userId 기반 데이터)을 이용자가 게임을 사용하는 동안 보관하며, 일정 기간
              이후 안전하게 삭제합니다.
            </p>
            <p>게임 데이터의 완전한 삭제를 원하시면 아래 이메일로 요청해 주세요. 합리적인 기간 내에 조치하겠습니다.</p>
            <p>
              <a href="mailto:team.bunnyden@gmail.com">team.bunnyden@gmail.com</a>
            </p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>5. 아동의 개인정보</h2>
          <article className="terms-article">
            <p>
              서비스 제공자는 만 13세 미만 아동으로부터 고의로 개인정보를 수집하지 않습니다. 아동이 개인정보를 제공하지
              않도록 권장하며, 부모 및 법정대리인은 자녀의 게임 이용을 지도하시기 바랍니다.
            </p>
            <p>
              아동이 개인정보를 제공한 사실을 알게 되신 경우, 즉시{' '}
              <a href="mailto:team.bunnyden@gmail.com">team.bunnyden@gmail.com</a> 으로 연락해 주시면 삭제 조치를
              진행하겠습니다.
            </p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>6. 보안조치</h2>
          <article className="terms-article">
            <p>
              서비스 제공자는 사용자 정보를 안전하게 보호하기 위해 물리적, 전자적, 절차적 보안 조치를 마련하고 있습니다.
              예: 데이터 암호화, 접근 제한, 서버 보호 시스템 등.
            </p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>7. 개인정보 처리방침의 변경</h2>
          <article className="terms-article">
            <p>
              본 방침은 서비스 제공자의 정책 또는 관련 법령 변경에 따라 수정될 수 있습니다. 변경 시 본 페이지를 통해
              공지하며, 변경된 내용은 게시 즉시 효력이 발생합니다.
            </p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>8. 동의</h2>
          <article className="terms-article">
            <p>이용자가 게임을 설치하고 사용하는 경우, 본 개인정보 처리방침에 동의한 것으로 간주됩니다.</p>
          </article>
        </section>

        <section className="terms-chapter">
          <h2>9. 문의처</h2>
          <article className="terms-article">
            <p>서비스 제공자: 버니덴(Bunnyden)</p>
            <p>
              이메일: <a href="mailto:team.bunnyden@gmail.com">team.bunnyden@gmail.com</a>
            </p>
          </article>
        </section>

        <footer className="terms-footer">
          <p className="terms-reference">본 게임은 "있는 그대로(AS IS)" 제공됩니다.</p>
          <p className="terms-links">
            <Link to="/" className="privacy-link">
              서비스 이용약관
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
