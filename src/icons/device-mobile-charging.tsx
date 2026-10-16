"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M11 4h2"}],["path",{"d":"M12 9.5l-1 2.5h2l-1 2.5"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const DeviceMobileChargingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobileChargingIcon.displayName = "DeviceMobileChargingIcon";
