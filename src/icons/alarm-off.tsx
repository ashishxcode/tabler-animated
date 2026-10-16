"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56"}],["path",{"d":"M12 12v1h1"}],["path",{"d":"M5.261 5.265l-1.011 .735"}],["path",{"d":"M17 4l2.75 2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12.5,12.5],"a":0.35,"dl":0.2},{"fx":"shake","n":[0,2,3],"o":[12,12]}];

export const AlarmOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlarmOffIcon.displayName = "AlarmOffIcon";
