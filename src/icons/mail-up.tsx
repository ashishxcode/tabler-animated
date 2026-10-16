"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}],["path",{"d":"M3 7l9 6l9 -6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12.5,13.5],"a":-6}];

export const MailUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MailUpIcon.displayName = "MailUpIcon";
