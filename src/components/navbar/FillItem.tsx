import { useNavigate } from 'react-router-dom';
import { NavIcon } from './navIcons';

type FillItemProps = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  compact?: boolean;
  dense?: boolean;
  active?: boolean;
  onClick?: () => void;
};

export function FillItem({
  title,
  description,
  href,
  icon,
  compact = false,
  dense = false,
  active = false,
  onClick,
}: FillItemProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`brand-fill-item ${active ? 'is-active' : ''} ${dense ? 'is-dense' : ''}`}
      onClick={() => {
        onClick?.();
        navigate(href);
      }}
    >
      <span className="fill-wash" />
      <span className={`relative z-10 flex ${compact || dense ? 'items-center gap-3' : 'items-start gap-3.5'}`}>
        {icon && (
          <span className={`fill-icon mt-0.5 shrink-0 flex items-center justify-center rounded-lg ${dense ? 'h-8 w-8' : 'h-10 w-10 rounded-xl'}`}>
            <NavIcon name={icon} className={dense ? 'h-4 w-4' : 'h-5 w-5'} />
          </span>
        )}
        <span className="min-w-0">
          <span className={`fill-title block font-semibold leading-snug ${dense ? 'text-[14.5px]' : 'text-[16px]'}`}>
            {title}
          </span>
          {description && (
            <span className={`fill-desc block font-medium leading-relaxed ${dense ? 'mt-0.5 text-[12.5px]' : 'mt-1 text-[13.5px]'}`}>
              {description}
            </span>
          )}
        </span>
      </span>
    </button>
  );
}
