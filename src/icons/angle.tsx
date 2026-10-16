"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 19h-18l9 -15"}],["path",{"d":"M20.615 15.171h.015"}],["path",{"d":"M19.515 11.771h.015"}],["path",{"d":"M17.715 8.671h.015"}],["path",{"d":"M15.415 5.971h.015"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.5],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[20.62,15.17],[19.52,11.77],[17.72,8.67],[15.42,5.97]]}];

export const AngleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AngleIcon.displayName = "AngleIcon";
