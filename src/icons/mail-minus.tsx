"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"}],["path",{"d":"M16 19h6"}],["path",{"d":"M3 7l9 6l9 -6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0,2],"o":[12,12],"a":-6}];

export const MailMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MailMinusIcon.displayName = "MailMinusIcon";
