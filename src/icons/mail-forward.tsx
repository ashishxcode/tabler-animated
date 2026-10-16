"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"}],["path",{"d":"M3 6l9 6l9 -6"}],["path",{"d":"M15 18h6"}],["path",{"d":"M18 15l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,12.5],"a":-6}];

export const MailForwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MailForwardIcon.displayName = "MailForwardIcon";
