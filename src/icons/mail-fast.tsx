"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7h3"}],["path",{"d":"M3 11h2"}],["path",{"d":"M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801"}],["path",{"d":"M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[11.99,12],"a":-6}];

export const MailFastIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MailFastIcon.displayName = "MailFastIcon";
