"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12v-9"}],["path",{"d":"M12 12l-9 -2.5"}],["path",{"d":"M12 12l9 -2.5"}],["path",{"d":"M12 12l6 8.5"}],["path",{"d":"M12 12l-6 8.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,11.75],"a":0.06}];

export const AsteriskSimpleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AsteriskSimpleIcon.displayName = "AsteriskSimpleIcon";
