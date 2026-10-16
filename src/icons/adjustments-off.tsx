"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 6v2"}],["path",{"d":"M6 12v8"}],["path",{"d":"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 4v4m0 4v2"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v5m0 4v2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[9],"o":[12,12],"dl":0.25},{"fx":"nudge","n":[0,1,3,5,6,7],"o":[12,12],"d":[2.2,0]},{"fx":"nudge","n":[2,4,8],"o":[12,12],"d":[2.2,0]}];

export const AdjustmentsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsOffIcon.displayName = "AdjustmentsOffIcon";
