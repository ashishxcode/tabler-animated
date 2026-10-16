"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 4v10"}],["path",{"d":"M19 16l-2 3h4l-2 3"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2,3,4,6,7,8,9],"o":[12,12]}];

export const AdjustmentsBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsBoltIcon.displayName = "AdjustmentsBoltIcon";
