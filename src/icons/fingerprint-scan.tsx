"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4"}],["path",{"d":"M12 11v1.75c-.001 1.11 .661 2.206 1 3.25"}],["path",{"d":"M9 14.25c.068 .58 .358 1.186 .5 1.75"}],["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6],"o":[12,12],"st":0.07}];

export const FingerprintScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FingerprintScanIcon.displayName = "FingerprintScanIcon";
