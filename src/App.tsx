import './App.css';
import { fakeRole, fakeRoleWithConflict } from './fakeRoles.ts';

function App() {
  return (
    <div className="App">
      <p>Роли:</p>

      <div className="roles">
        <div className="role">
          <p>
            {fakeRole.name} (# {fakeRole.id})
          </p>

          <section>
            <ul>
              {fakeRole.policies.map((policy) =>
                policy.paths.map((path) => (
                  <li key={path}>
                    {path} ({policy.kind} / {policy.type})
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>

        <div className="role">
          <p>
            {fakeRoleWithConflict.name} (# {fakeRoleWithConflict.id})
          </p>

          <section>
            <ul>
              {fakeRoleWithConflict.policies.map((policy) =>
                policy.paths.map((path) => (
                  <li key={path} className={path === '/api/articles/:id' ? 'conflicted-path' : ''}>
                    {path}
                    {path === '/api/articles/:id' ? ` (${policy.kind} / ${policy.type})` : ''}
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
