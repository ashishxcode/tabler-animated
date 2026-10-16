"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21v-2a4 4 0 0 1 4 -4h2"}],["path",{"d":"M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"}],["path",{"d":"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[14,12.5],"a":0.08}];

export const UserShieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UserShieldIcon.displayName = "UserShieldIcon";
