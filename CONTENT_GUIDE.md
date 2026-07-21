# TCPS Lab 사이트 — 컨텐츠 관리 가이드

사이트의 모든 컨텐츠(구성원, 논문, 과제, 강의, 갤러리)는 **`content/*.json`** 파일에 있습니다.
코드(`src/`)를 건드리지 않고 이 파일들만 수정하면 되고, master에 push되면 Vercel이 1~2분 내 자동 재배포합니다.

## 수정 방법 3가지

1. **CMS (구성원용, 권장)** — `https://tcpslab.vercel.app/admin` 접속 → GitHub 로그인 → 폼으로 편집 → Save.
   아래 "CMS 로그인 연결"을 먼저 1회 완료해야 사용 가능합니다.
2. **GitHub 웹** — repo에서 `content/` 안의 JSON 파일을 ✏️로 직접 수정 → Commit.
3. **로컬** — 평소처럼 파일 수정 후 push.

## 파일 구조

| 파일 | 내용 |
|---|---|
| `content/members.json` | 현재 구성원(researchers) + 졸업생(alumni) |
| `content/professor.json` | 교수님 프로필 (학력·경력·수상 등) |
| `content/publications.json` | 논문/특허 (category로 분류) |
| `content/projects.json` | 연구과제 |
| `content/courses.json` | 강의 (number가 클수록 위에 표시) |
| `content/gallery.json` | 갤러리 이벤트 (사진 경로 배열 포함) |
| `content/site.json` | 연구실 이름·학과·학교 |

`src/lib/*.ts`는 타입 정의 + JSON re-export만 담당합니다. 필드를 추가하려면 JSON과 타입을 함께 수정하세요.

## 사진 규칙

- **멤버 사진**: `public/members/<slug>.jpg` (jpg가 아니면 members.json의 `photoExt`에 확장자 기입)
- **갤러리 사진**: 기존 사진은 `public/gallery/<이벤트폴더>/`에 있음.
  - gallery.json의 `images`에는 `/gallery/폴더/파일명` 또는 `/uploads/파일명` 형태의 **전체 경로**를 적습니다.
  - CMS에서 업로드하면 자동으로 `public/uploads/`에 저장되고 경로도 자동 입력됩니다.
  - 용량 절약을 위해 업로드 전 avif/webp 변환 권장 (기존 파일들 참고).

## CMS 로그인 연결 (최초 1회)

ORMS Lab 홈페이지에 사용한 **Cloudflare Worker(sveltia-cms-auth)를 그대로 재사용**합니다.
아직 Worker를 안 만들었다면 ormslab.github.io repo의 README 2번 섹션을 먼저 따라 하세요.

1. Cloudflare 대시보드 → Workers & Pages → `sveltia-cms-auth` → Settings → Variables and Secrets
2. `ALLOWED_DOMAINS` 값에 `tcpslab.vercel.app` 추가 (쉼표로 구분: `ormslab.github.io, tcpslab.vercel.app`) → Deploy
3. 이 repo의 `public/admin/config.yml`에서 `base_url:`을 Worker 주소로 교체 → push
4. GitHub OAuth App은 ORMS 때 만든 것을 그대로 사용 (callback이 Worker 주소이므로 추가 설정 불필요)
5. `tcpslab.vercel.app/admin` 접속 → Sign in with GitHub 확인

## 구성원 초대

repo(latencyspace/tcpslab-site) → Settings → Collaborators → 구성원 GitHub 계정을 **Write** 권한으로 초대.
초대받은 구성원은 /admin에서 로그인만 하면 됩니다.

## 참고

- `gen-content.mts`는 하드코딩 데이터를 JSON으로 옮길 때 쓴 일회성 스크립트로, 삭제해도 됩니다(.gitignore 처리됨).
- 새 갤러리 이벤트의 상세 페이지 URL은 `slug` 값으로 자동 생성됩니다 (`/gallery/<slug>`).
