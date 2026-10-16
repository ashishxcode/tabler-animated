"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12l8 -4.5"}],["path",{"d":"M12 12v9"}],["path",{"d":"M12 12l-8 -4.5"}],["path",{"d":"M12 12l8 4.5"}],["path",{"d":"M12 3v9"}],["path",{"d":"M12 12l-8 4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.06}];

export const AsteriskIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AsteriskIcon.displayName = "AsteriskIcon";
