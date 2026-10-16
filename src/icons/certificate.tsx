"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}],["path",{"d":"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"}],["path",{"d":"M6 9l12 0"}],["path",{"d":"M6 12l3 0"}],["path",{"d":"M6 15l2 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,3],"o":[12,15.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[4,5],"o":[7.5,13.5],"dl":0.2},{"fx":"pop","n":[2],"o":[12,12],"a":0.04}];

export const CertificateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CertificateIcon.displayName = "CertificateIcon";
