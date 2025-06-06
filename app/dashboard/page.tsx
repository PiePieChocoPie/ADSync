import Input from "@/components/atom/Input/page";
export default function dashboard() {
  return (
    <>
      <Input placeholder="fe" />
      <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">Добро пожаловать в систему ADSync</h1>

      <p className="text-lg">
        <strong>ADSync</strong> — это интеллектуальная система для автоматизированного создания, управления и синхронизации учетных записей пользователей в инфраструктуре Active Directory (AD), а также интеграции с другими внутренними и внешними сервисами компании.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🎯 Назначение системы</h2>
        <p>
          Цель ADSync — автоматизировать ручные процессы, такие как создание учетной записи в AD, регистрация в Bitrix24, почтовой системе, CRM, LMS и других интегрированных сервисах. Это экономит время, снижает количество ошибок и разгружает IT-персонал.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">⚙️ Как это работает</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>HR или администратор вносит нового сотрудника в учетную систему (1С, CRM и т.п.).</li>
          <li>ADSync автоматически получает информацию и запускает процесс создания учетной записи в Active Directory.</li>
          <li>Пользователь добавляется в соответствующие группы безопасности и получает доступ к нужным системам.</li>
          <li>Учетные данные генерируются и отправляются пользователю по email (с учетом политики безопасности).</li>
          <li>Одновременно можно включить интеграцию с другими сервисами (например, выдача пропуска, создание почты и пр.).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔐 Управление доступом</h2>
        <p>Система гибко настраивается через веб-интерфейс. Администратор может:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Управлять политикой генерации паролей.</li>
          <li>Настраивать группы и правила автоматического распределения.</li>
          <li>Видеть, какие пользователи имеют доступ к каким системам.</li>
          <li>Просматривать логи всех изменений для целей аудита.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔄 Интеграции</h2>
        <p>На текущий момент ADSync поддерживает автоматическую интеграцию со следующими платформами:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Active Directory</li>
          <li>Bitrix24</li>
          <li>Microsoft Exchange / Outlook</li>
          <li>GATE (пропускная система)</li>
          <li>Система дистанционного обучения (LMS / Educon)</li>
          <li>Внутренние REST API</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🛠 Конфигурация и панель управления</h2>
        <p>Администратор ADSync может использовать веб-панель для:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Просмотра списка сотрудников и их доступа</li>
          <li>Настройки параметров генерации логинов и паролей</li>
          <li>Настройки интеграции с внешними сервисами</li>
          <li>Проверки и перезапуска сервисов</li>
          <li>Журналирования действий</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">📈 Примеры использования</h2>
        <p>Ниже приведены реальные сценарии, где ADSync значительно упростил процессы:</p>

        <div className="border-l-4 border-blue-500 pl-4 text-sm p-4 rounded-md">
          <strong>🎓 Университет:</strong> При зачислении студентов учетная запись создается в AD, выдается доступ к LMS и автоматически оформляется пропуск.
        </div>

        <div className="border-l-4 border-green-500 pl-4 text-sm p-4 rounded-md">
          <strong>🏢 Корпоративная компания:</strong> При найме сотрудника HR вносит данные в 1С — ADSync создает учётку в AD, добавляет в группы, оформляет почту и доступ к Bitrix24.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">📌 Дополнительные возможности</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Обязательная смена пароля при первом входе</li>
          <li>Автоматическое добавление в группы по ролям</li>
          <li>Логирование всех операций в защищённую БД</li>
          <li>Поддержка ручного добавления/удаления пользователей</li>
          <li>Импорт/экспорт конфигураций</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">❓ Часто задаваемые вопросы</h2>
        <div>
          <p className="font-semibold">Можно ли настроить под свою систему?</p>
          <p>Да, ADSync легко адаптируется под любые внутренние системы через API или подключаемые модули.</p>
        </div>
        <div>
          <p className="font-semibold">Что делать при сбое интеграции?</p>
          <p>На панели будет отображено уведомление. Также доступны ручные перезапуски и диагностика через UI.</p>
        </div>
        <div>
          <p className="font-semibold">Где хранятся пароли?</p>
          <p>Пароли генерируются и передаются через защищённые каналы, не хранятся в открытом виде.</p>
        </div>
      </section>

      <footer className="pt-8 border-t">
        <p className="text-sm text-muted-foreground">
          Команда ADSync, 2025
        </p>
      </footer>
    </div>

    </>
  );
}
