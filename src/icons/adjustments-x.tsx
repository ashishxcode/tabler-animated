"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M13.653 14.874a2 2 0 1 0 -.586 2.818"}],["path",{"d":"M12 4v10"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v4"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[9,10],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"nudge","n":[0,1,3,5,6,7,8],"o":[12,12],"d":[2.2,0]},{"fx":"pop","n":[2,4],"o":[9,12],"a":0.04}];

export const AdjustmentsXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsXIcon.displayName = "AdjustmentsXIcon";
