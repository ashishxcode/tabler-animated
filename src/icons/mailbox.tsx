"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5"}],["path",{"d":"M12 11v-8h4l2 2l-2 2h-4"}],["path",{"d":"M6 15h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,16],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[15,7],[6.5,15]]}];

export const MailboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MailboxIcon.displayName = "MailboxIcon";
