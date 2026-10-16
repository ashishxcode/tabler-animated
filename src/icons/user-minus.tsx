"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}],["path",{"d":"M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[11,12],"a":0.06}];

export const UserMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UserMinusIcon.displayName = "UserMinusIcon";
